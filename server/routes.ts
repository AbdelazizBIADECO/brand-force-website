import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendAuditConfirmationEmail } from "./lib/email";
import {
  insertAuditRequestSchema,
  insertContactSubmissionSchema,
  insertNewsletterSubscriptionSchema
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Audit request endpoint
  app.post("/api/audit-request", async (req, res) => {
    try {
      const validatedData = insertAuditRequestSchema.parse(req.body);
      const auditRequest = await storage.createAuditRequest(validatedData);

      // Send confirmation email
      const response = await fetch('https://example.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: auditRequest.email,
          website: auditRequest.website,
        })
      });

      const data = await response.json();

      res.json({
        message: 'Data sent successfully',
        apiResponse: data
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid request data", details: error.errors });
      } else {
        console.error('Audit request error:', error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Contact submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const contactSubmission = await storage.createContactSubmission(validatedData);
      const response = await fetch('https://example.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: req.body.email,
          website: req.body.website,
          message: req.body.message,
          name: req.body.name
        })
      });

      const data = await response.json();

      res.json({
        message: 'Data sent successfully',
        apiResponse: data
      });
      res.json(contactSubmission);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid request data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);

      // Check if email already exists
      const existingSubscription = await storage.getNewsletterSubscriptionByEmail(validatedData.email);
      if (existingSubscription) {
        return res.status(409).json({ error: "Email already subscribed" });
      }

      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.json(subscription);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid request data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Get all audit requests (for admin purposes)
  app.get("/api/audit-requests", async (req, res) => {
    try {
      const requests = await storage.getAuditRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get all newsletter subscriptions (for admin purposes)
  app.get("/api/newsletter-subscriptions", async (req, res) => {
    try {
      const subscriptions = await storage.getNewsletterSubscriptions();
      res.json(subscriptions);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
