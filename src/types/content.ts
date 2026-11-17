import type { ImageMetadata } from 'astro';

import type { IconName } from '@atoms/Icon/iconNames';

type ProjectTypes = 'commercial' | 'private';
type StoryParts = 'situation' | 'task' | 'action' | 'result';

export interface RemoteImage {
  src: string;
  width: number;
  height: number;
}

export type ImageSource = ImageMetadata | RemoteImage;

export interface ImageData {
  src: ImageSource;
  dark?: ImageSource;
}

export interface ProjectImage extends ImageData {
  alt: string;
}

export interface Project {
  id: string;
  name: string;
  types: ProjectTypes[];
  featured?: boolean;
  archived?: boolean;
  company?: string;
  start?: string;
  end?: string;
  stack: string[];
  links: { live?: string; repo?: string };
  summary: string;
  star: Record<StoryParts, string>;
  gallery: ProjectImage[];
  lighthouse?: ProjectImage[];
}

interface TimelineSection {
  title: string;
  stack?: string[];
  items: string[];
  project?: string;
}

export interface TimelineEntry {
  id: string;
  featured?: boolean;
  name: string;
  shortName?: string;
  logo?: ImageData;
  icon?: IconName;
  url?: string;
  start?: string;
  end?: string;
  title: string;
  titleNote?: string;
  sections?: TimelineSection[];
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface Profile {
  highlights: string[];
  bio: string[];
  contact: { intro: string; points: string[] };
}
