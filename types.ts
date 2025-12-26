
export interface ProjectData {
  schoolName: string;
  projectName: string;
  expectedRevenue: number;
}

export interface GASResponse {
  status: 'success' | 'error';
  message?: string;
}

export enum PageId {
  Dashboard = 'dashboard',
  Projects = 'projects',
  Reports = 'reports',
  Logs = 'logs',
  Users = 'users'
}
