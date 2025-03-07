// Common interfaces and types

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  category: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface NetworkStat {
  number: string;
  label: string;
}

export interface Category {
  value: string;
  label: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
  date: string;
  service: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  testType?: string;
  preferredDate?: string;
  preferredTime?: string;
  address?: string;
}

export interface HealthConcern {
  name: string;
  icon: string;
  type: string;
  description: string;
}