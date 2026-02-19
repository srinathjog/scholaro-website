
import React from 'react';
import { 
  Users, 
  CalendarCheck, 
  CreditCard, 
  GraduationCap, 
  UserPlus, 
  MessageSquare, 
  Clock, 
  BarChart3,
  Cloud,
  ShieldCheck,
  Smartphone,
  Headphones,
  FileText,
  Zap
} from 'lucide-react';
import { Feature, Benefit, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const FEATURES: Feature[] = [
  {
    id: 'student-mgmt',
    title: 'Student Management',
    description: 'Centralized database for student profiles, records, and progress tracking.',
    iconName: 'Users',
  },
  {
    id: 'attendance',
    title: 'Attendance Tracking',
    description: 'Automated attendance systems for students and staff with real-time alerts.',
    iconName: 'CalendarCheck',
  },
  {
    id: 'fees',
    title: 'Fee Management',
    description: 'Digital invoicing, online payment integration, and automatic fee reminders.',
    iconName: 'CreditCard',
  },
  {
    id: 'exams',
    title: 'Exam & Results',
    description: 'Simplify grading, report card generation, and academic analysis.',
    iconName: 'GraduationCap',
  },
  {
    id: 'staff',
    title: 'Staff Management',
    description: 'Manage payroll, leaves, performance, and professional records effectively.',
    iconName: 'UserPlus',
  },
  {
    id: 'parent-portal',
    title: 'Parent Portal',
    description: 'Keep parents updated on their child academic journey and school news.',
    iconName: 'MessageSquare',
  },
  {
    id: 'timetable',
    title: 'Timetable Management',
    description: 'Hassle-free scheduling with automatic conflict detection.',
    iconName: 'Clock',
  },
  {
    id: 'reports',
    title: 'Reports & Analytics',
    description: 'Generate 100+ comprehensive reports for data-driven decisions.',
    iconName: 'BarChart3',
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: 'cloud',
    title: 'Cloud-Based System',
    description: 'Access your school data from anywhere, at any time, securely via the cloud.',
    icon: 'Cloud',
  },
  {
    id: 'secure',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade encryption and daily backups to protect your sensitive data.',
    icon: 'ShieldCheck',
  },
  {
    id: 'reports',
    title: 'Real-Time Reports',
    description: 'Instant insights into school performance, attendance, and financial health.',
    icon: 'FileText',
  },
  {
    id: 'mobile',
    title: 'Mobile Friendly',
    description: 'Responsive design that works perfectly on smartphones, tablets, and desktops.',
    icon: 'Smartphone',
  },
  {
    id: 'comm',
    title: 'Easy Communication',
    description: 'Integrated SMS, Email, and App notifications for seamless updates.',
    icon: 'Zap',
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'Our dedicated team is always ready to help you with technical assistance.',
    icon: 'Headphones',
  },
];

export const IconMap: Record<string, React.FC<any>> = {
  Users,
  CalendarCheck,
  CreditCard,
  GraduationCap,
  UserPlus,
  MessageSquare,
  Clock,
  BarChart3,
  Cloud,
  ShieldCheck,
  FileText,
  Smartphone,
  Zap,
  Headphones
};
