import { type ReactNode } from 'react';
import type { NotebookContextType } from '@/contexts/notebookTypes';
declare const NotebookContext: import("react").Context<NotebookContextType | undefined>;
export declare const NotebookProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export default NotebookContext;
