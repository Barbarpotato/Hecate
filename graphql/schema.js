import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList, GraphQLSchema } from 'graphql';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const AchievementType = new GraphQLObjectType({
    name: 'Achievement',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        source: { type: GraphQLString },
        image_url: { type: GraphQLString },
        date: { type: GraphQLString },
    })
});

// ** Query list for the api
const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
        achievements: {
            type: new GraphQLList(AchievementType),
            async resolve() {
                return await prisma.achievement.findMany();
            }
        },
        achievement: {
            type: AchievementType,
            args: { id: { type: GraphQLID } },
            async resolve(_parent, args) {
                return await prisma.achievement.findUnique({ where: { id: args.id } });
            }
        }

    }
});

// ** Mutation list for the api
const RootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createAchievement: {
            type: AchievementType,
            args: {
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                source: { type: GraphQLString },
                image_url: { type: GraphQLString },
                date: { type: GraphQLString }
            },
            async resolve(_parent, args) {
                return await prisma.achievement.create({
                    data: {
                        title: args.title,
                        description: args.description,
                        source: args.source,
                        image_url: args.image_url,
                        date: new Date(args.date)
                    }
                });
            }
        },
        updateAchievement: {
            type: AchievementType,
            args: {
                id: { type: GraphQLID },
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                source: { type: GraphQLString },
                image_url: { type: GraphQLString },
                date: { type: GraphQLString }
            },
            async resolve(_parent, args) {
                return await prisma.achievement.update({
                    where: { id: args.id },
                    data: {
                        title: args.title,
                        description: args.description,
                        source: args.source,
                        image_url: args.image_url,
                        date: new Date(args.date)
                    }
                });
            }
        },
        deleteAchievement: {
            type: AchievementType,
            args: {
                id: { type: GraphQLID }
            },
            async resolve(_parent, args) {
                return await prisma.achievement.delete({
                    where: { id: args.id }
                });
            }
        }
    }
});

export default new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});