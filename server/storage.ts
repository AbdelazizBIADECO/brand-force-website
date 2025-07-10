import { 
  auditRequests, 
  contactSubmissions, 
  newsletterSubscriptions,
  type AuditRequest, 
  type ContactSubmission, 
  type NewsletterSubscription,
  type InsertAuditRequest, 
  type InsertContactSubmission, 
  type InsertNewsletterSubscription 
} from "@shared/schema";

export interface IStorage {
  // Audit requests
  createAuditRequest(request: InsertAuditRequest): Promise<AuditRequest>;
  getAuditRequests(): Promise<AuditRequest[]>;
  
  // Contact submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Newsletter subscriptions
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
  getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined>;
}

export class MemStorage implements IStorage {
  private auditRequests: Map<number, AuditRequest>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private currentAuditId: number;
  private currentContactId: number;
  private currentNewsletterId: number;

  constructor() {
    this.auditRequests = new Map();
    this.contactSubmissions = new Map();
    this.newsletterSubscriptions = new Map();
    this.currentAuditId = 1;
    this.currentContactId = 1;
    this.currentNewsletterId = 1;
  }

  async createAuditRequest(request: InsertAuditRequest): Promise<AuditRequest> {
    const id = this.currentAuditId++;
    const auditRequest: AuditRequest = {
      ...request,
      id,
      createdAt: new Date(),
    };
    this.auditRequests.set(id, auditRequest);
    return auditRequest;
  }

  async getAuditRequests(): Promise<AuditRequest[]> {
    return Array.from(this.auditRequests.values());
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      website: submission.website || null,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = this.currentNewsletterId++;
    const newsletterSubscription: NewsletterSubscription = {
      ...subscription,
      id,
      createdAt: new Date(),
    };
    this.newsletterSubscriptions.set(id, newsletterSubscription);
    return newsletterSubscription;
  }

  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }

  async getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined> {
    return Array.from(this.newsletterSubscriptions.values()).find(
      (subscription) => subscription.email === email
    );
  }
}

export const storage = new MemStorage();
