import { DOCUMENT_PREVIEW_MODAL_ACTION } from '../constants';
import { DocumentPreviewEvent } from './document-preview-event';

export interface DocumentPreviewActionEvent extends DocumentPreviewEvent {
  userAction: DOCUMENT_PREVIEW_MODAL_ACTION;
}
