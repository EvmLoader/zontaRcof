


interface apiKeyAttributes {
  id: string;
  userId: string;
  name: string; // API key name
  key: string;
  permissions: string[]; // Permissions as an array of strings
  ipWhitelist: string[]; // IP Whitelist as an array of strings
  createdAt?: Date;
  deletedAt?: Date;
  updatedAt?: Date;
}

type apiKeyPk = "id";
type apiKeyId = apiKey[apiKeyPk];
type apiKeyOptionalAttributes =
  | "id"
  | "createdAt"
  | "deletedAt"
  | "updatedAt";
type apiKeyCreationAttributes = Optional<
  apiKeyAttributes,
  apiKeyOptionalAttributes
>;
