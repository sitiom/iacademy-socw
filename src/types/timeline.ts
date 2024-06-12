export interface TimelineEvent {
  title: string;
  description?: string;
  location: string;
  time: string;
}

export interface TimelineDay {
  day: number;
  title: string;
  color: string;
  events: TimelineEvent[];
}

export type Timeline = TimelineDay[];
