import * as Sequelize from "sequelize";
import { DataTypes, Model } from "sequelize";

export default class page
  extends Model<pageAttributes, pageCreationAttributes>
  implements pageAttributes
{
  id!: string;
  title!: string;
  content!: string;
  description?: string;
  image?: string;
  slug!: string;
  status!: "PUBLISHED" | "DRAFT";
  createdAt?: Date;
  deletedAt?: Date;
  updatedAt?: Date;

  public static initModel(sequelize: Sequelize.Sequelize): typeof page {
    return page.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING(255),
          allowNull: false,
          validate: {
            notEmpty: { msg: "title: Title cannot be empty" },
          },
        },
        content: {
          type: DataTypes.TEXT("long"),
          allowNull: false,
          validate: {
            notEmpty: { msg: "content: Content cannot be empty" },
          },
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        image: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        slug: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: "pageSlugKey",
          validate: {
            notEmpty: { msg: "slug: Slug cannot be empty" },
          },
        },
        status: {
          type: DataTypes.ENUM("PUBLISHED", "DRAFT"),
          allowNull: false,
          defaultValue: "DRAFT",
          validate: {
            isIn: {
              args: [["PUBLISHED", "DRAFT"]],
              msg: "status: Status must be either PUBLISHED or DRAFT",
            },
          },
        },
      },
      {
        sequelize,
        modelName: "page",
        tableName: "page",
        timestamps: true,
        paranoid: true,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "pageSlugKey",
            unique: true,
            using: "BTREE",
            fields: [{ name: "slug" }],
          },
        ],
      }
    );
  }
  public static associate(models: any) {}
}
