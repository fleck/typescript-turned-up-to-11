// Set tsconfig.json noUncheckedIndexedAccess: false
type Response = {
  status: "a ok" | "could be better";
};

const processResponseBad = (responses: Response[]) => {
  const firstResponse = responses[0];

  console.log(firstResponse.status);
};

processResponseBad([]);

const processResponse = (responses: Response[]) => {
  const firstResponse = responses[0];

  if (!firstResponse) {
    console.log("No responses");
    return;
  }

  console.log(firstResponse.status);
};

processResponse([]);
