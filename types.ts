
export interface KnowledgeItem {
  id: string;
  title: string;
  category: string;
  lastReviewed: Date;
  retentionScore: number;
}

export interface Task {
  id: string;
  label: string;
  completed: boolean;
  intensity: 'low' | 'medium' | 'high';
}

export type ViewState = 'dashboard' | 'blog' | 'about';
