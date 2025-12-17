import { type FC } from 'react';

import { useLastMessageDate } from '@entities/dialogue/model/useLastMessageDate';
import { formatMessageDate } from '@shared/lib/dateFormatter';

import styles from './DialogueItem.module.scss';

interface IDialogueItemProps {
   dialogueId: string;
   dialogueWith: string;
   iconUrl: string;
   onClick: () => void;
}

export const DialogueItem: FC<IDialogueItemProps> = ({ dialogueId, dialogueWith, iconUrl, onClick }) => {
   const lastMessageDate = useLastMessageDate(dialogueId);

   if (!lastMessageDate) {
      return null;
   }

   return (
      <div onClick={onClick} className={styles.container}>
         <img src={iconUrl} alt={dialogueWith} className={styles.img} />
         <p>{dialogueWith}</p>
         <p>{formatMessageDate(lastMessageDate)}</p>
      </div>
   )
}