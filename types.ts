
import React from 'react';

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  amount: string;
  validity: string;
  features: string[];
  cta: string;
  popular?: boolean;
  style: 'starter' | 'pro' | 'elite';
  icon?: React.ReactNode;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Order {
  id: string;
  planId: string;
  planName: string;
  amount: string;
  currency: string;
  network: string;
  txHash: string;
  userWalletAddress: string;
  timestamp: number;
  status: 'pending' | 'confirmed' | 'rejected';
}

export interface PaymentMethod {
  id: string;
  name: string;
  network: string;
  address: string;
  icon: string;
}
