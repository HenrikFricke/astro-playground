import { PrismaClient } from '@prisma/client/edge'

export const createPrismaClient = () => new PrismaClient({
	datasources: {
		db: {
			url: "process.env.DATABASE_URL"
		}
	},
})