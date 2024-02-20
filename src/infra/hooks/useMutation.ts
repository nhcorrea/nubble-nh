import {useState} from 'react';

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

/**
 * @deprecated use useMutation from `react-query` instead
 * @param mutationFn
 * @param options
 * @returns
 */

export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function mutate(variables: TVariables) {
    try {
      setIsLoading(true);
      const postComment = await mutationFn(variables);

      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
    } catch (err) {
      setError(true);
      if (options?.onError) {
        options.onError(
          options.errorMessage || 'Algo deu errado. Tente novamente.',
        );
      }
    } finally {
      setIsLoading(false);
    }
  }

  return {
    mutate,
    isLoading,
    error,
  };
}
