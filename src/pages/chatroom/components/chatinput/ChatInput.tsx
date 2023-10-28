import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';
import { RiSendPlaneFill } from 'react-icons/ri';
import { BsEmojiSmile, BsFillMicFill } from 'react-icons/bs';
import { ImAttachment } from 'react-icons/im';
import Picker from 'emoji-picker-react';
import { OpenAI } from 'langchain/llms/openai';
import { LLMChain } from 'langchain/chains';
import { PromptTemplate } from 'langchain/prompts';
import { Document } from 'langchain/document';
import { SingleStoreVectorStore } from 'langchain/vectorstores/singlestore';

import { createPool } from 'mysql2/promise';
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { createClient } from '@supabase/supabase-js';
import exampleText from 'ai/exampleText';

import { color } from 'theme';
import Button from 'components/button/Button';

interface ChatInputProps {}

const model = new OpenAI({
  openAIApiKey: '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',
});

// const privateKey = process.env.SUPABASE_PRIVATE_KEY;
const privateKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmbnFucG5qdmtmaHVldGpraXdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY3NzI4MTUsImV4cCI6MjAwMjM0ODgxNX0.QWfLWFbE4kUWtxypakSawzINgNxvhQLTzHTy-xTkqZ8`;

if (!privateKey) throw new Error(`Expected env var SUPABASE_PRIVATE_KEY`);

// const url = process.env.SUPABASE_URL;
const url = 'https://ifnqnpnjvkfhuetjkiws.supabase.co';
if (!url) throw new Error(`Expected env var SUPABASE_URL`);

export const run = async () => {
  const client = createClient(url, privateKey);

  const vectorStore = await SupabaseVectorStore.fromTexts(
    ['Hello world', 'Bye bye', "What's this?"],
    [{ id: 2 }, { id: 1 }, { id: 3 }],
    new OpenAIEmbeddings(),
    {
      client,
      tableName: 'documents',
      queryName: 'match_documents',
    }
  );

  const resultOne = await vectorStore.similaritySearch('Hello world', 1);

  console.log(resultOne);
};

const getResponse = async () => {
  const res = await model.call(
    "What's a good idea for an application to build with GPT-3?"
  );

  console.log('res', res);
};

// export const run = async () => {
//   const pool = createPool({
//     // host: process.env.SINGLESTORE_HOST,
//     // port: Number(process.env.SINGLESTORE_PORT),
//     // user: process.env.SINGLESTORE_USERNAME,
//     // password: process.env.SINGLESTORE_PASSWORD,
//     // database: process.env.SINGLESTORE_DATABASE,
//     host: 'svc-6cea92dd-6b50-443e-93f5-40b2da6f4265-dml.azr-virginia1-2.svc.singlestore.com',
//     port: 3306,
//     user: 'admin',
//     password: 'BL0sQb2aIDFRyv32uDhPjQ3Lij3hkqFX',
//     database: 's2_dataset_martech_2ac600f2',
//   });

//   const vectorStore = await SingleStoreVectorStore.fromTexts(
//     ['Hello world', 'Bye bye', 'hello nice world'],
//     [{ id: 2 }, { id: 1 }, { id: 3 }],
//     new OpenAIEmbeddings(),
//     {
//       connectionPool: pool,
//     }
//   );
//   const resultOne = await vectorStore.similaritySearch('hello world', 1);
//   console.log(resultOne);
//   await pool.end();
// };

const ChatInput: React.FC<ChatInputProps> = ({}) => {
  const [showPicker, setShowPicker] = useState<boolean>();
  const [message, setMessage] = useState<string>();

  const getResponse = async () => {
    const res = await model.call(
      'What would be a good company name a company that makes colorful socks?'
    );
    console.log('res', res);
  };

  React.useEffect(() => {
    run();
    // getResponse();
  }, []);
  React.useEffect(() => {
    if (message) console.log(message, getResponse());
  }, [message]);

  const onEmojiClick = (event: any, emojiObject: { emoji: any }) => {
    setMessage((prev) =>
      prev ? `${prev}${emojiObject?.emoji}` : `${emojiObject?.emoji}`
    );
  };
  const handleClick = () => {
    setMessage('');
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setMessage(e?.target?.value);
  };

  return (
    <Container>
      <BsFillMicFill size='1.7rem' style={{ cursor: 'pointer' }} />
      <SearchDiv>
        <BsEmojiSmile
          size='1.7rem'
          style={{ cursor: 'pointer' }}
          onClick={() => setShowPicker((prev) => !prev)}
        />
        <Input
          placeholder='Type a message'
          value={message}
          onChange={handleChange}
        />
        <ImAttachment size='1.7rem' style={{ cursor: 'pointer' }} />
        {showPicker && (
          <PickerDiv>
            <Picker
              onEmojiClick={onEmojiClick}
              pickerStyle={{ width: '100%' }}
            />
          </PickerDiv>
        )}
      </SearchDiv>
      <Button
        bgColor={color.green}
        btnText={<RiSendPlaneFill color={color.white} size={'1.5rem'} />}
        height='4rem'
        width='4rem'
        borderRadius={'50%'}
        onKeyPress={() => null}
        onClick={handleClick}
      />
    </Container>
  );
};

export default ChatInput;

const Container = styled.div`
  width: 100%;
  background: ${color.white};
  height: 6rem;
  display: flex;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  gap: 2rem;
  margin-top: -2rem;
  border-radius: 0 0 2rem 2rem;
  justify-content: space-between;
  align-items: center;
`;

const SearchDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 4rem;
  width: 100%;
  box-sizing: border-box;
  border-radius: 2rem;
  background: ${color.brand2};
  padding: 0 1.2rem;
  gap: 1rem;
  width: 100%;
`;

const PickerDiv = styled.div`
  position: absolute;
  bottom: 4.5rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  font-family: Raleway;
  font-size: 17px;
  width: 100%;
`;
