import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  mongoClient: null as MongoClient,

  async connect (url: string): Promise<void> {
    this.mongoClient = await MongoClient.connect(url)
  },

  async disconnect (): Promise<void> {
    await this.mongoClient.close()
  },

  getCollection (name: string): Collection {
    return this.mongoClient.db().collection(name)
  },

  map (collection: any): any {
    const { _id: id, ...rest } = collection

    return { id: id.toString(), ...rest }
  }
}
