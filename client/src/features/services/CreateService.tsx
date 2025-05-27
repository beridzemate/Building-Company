import { useState } from 'react';
import Editor from '../../components/Editor';
import { useMutation, useQueryClient } from 'react-query';
import { createService } from './api';
import { Input } from '@shadcn/ui/input';
import { Button } from '@shadcn/ui/button';

export default function CreateService() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation(createService, {
    onSuccess: () => {
      queryClient.invalidateQueries('services');
      setTitle('');
      setDescription('');
    },
  });

  return (
    <div className="space-y-4">
      <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Service title" />
      <Editor value={description} onChange={setDescription} />
      <Button onClick={() => mutation.mutate({ title, description })}>
        Create Service
      </Button>
    </div>
  );
}
