


interface pageAttributes {
  id: string;
  title: string;
  content: string;
  description?: string;
  image?: string;
  slug: string;
  status: "PUBLISHED" | "DRAFT";
  createdAt?: Date;
  deletedAt?: Date;
  updatedAt?: Date;
}

type pagePk = "id";
type pageId = page[pagePk];
type pageOptionalAttributes =
  | "id"
  | "description"
  | "image"
  | "status"
  | "createdAt"
  | "deletedAt"
  | "updatedAt";
type pageCreationAttributes = Optional<
  pageAttributes,
  pageOptionalAttributes
>;
