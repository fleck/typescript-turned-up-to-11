// Set tsconfig.json to strict: false

function processApiResponseBad(response: {
  data?: {
    users?: Array<{
      id: number;
      name: string;
      email?: string;
    }>;
  };
  error?: string;
}) {
  const userCount = response.data.users.length;

  const firstUser = response.data.users[0];

  const firstEmail = firstUser.email.toUpperCase();

  return { userCount, firstEmail };
}

processApiResponseBad({});

function processApiResponse(response: {
  data?: {
    users?: Array<{
      id: number;
      name: string;
      email?: string;
    }>;
  };
  error?: string;
}) {
  const userCount = response?.data?.users?.length;

  const firstUser = response?.data?.users?.[0];

  const firstEmail = firstUser?.email?.toUpperCase();

  return { userCount, firstEmail };
}

processApiResponse({});
