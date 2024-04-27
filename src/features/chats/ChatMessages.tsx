import { useChatMessagesInfo } from './useChatMessagesInfo';
import { useChatSubscription } from './useChatSubscription';
import { useParams } from 'react-router-dom';
import ChatMessage from '../../components/ChatMessage';
import ChatMessageInput from './ChatMessageInput';
import ChatMessageName from './ChatMessageName';

function ChatMessages() {
  const { chatId } = useParams() as { chatId: string };
  console.log(chatId);
  useChatSubscription(chatId);
  const { isLoading, chatMessagesInfo } = useChatMessagesInfo(chatId);
  if (!chatMessagesInfo || isLoading) return null;

  return (
    <div className="relative h-full basis-full">
      <ChatMessageName />
      <div className="h-full overflow-y-auto pb-28 pt-20 ">
        {chatMessagesInfo.data?.map((message) => (
          <ChatMessage key={message.created_at} message={message} />
        ))}
      </div>
      <ChatMessageInput />
    </div>
  );
}

export default ChatMessages;
