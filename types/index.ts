export interface IEvent {
        id: string,
        title: string,
        date: Date,
        time: string,
        address: string,
        city: string,
        country: string,
        long: string,
        lat: string,
        category: string,
        imageUrl: string,
        price: number,
        description: string,
        organizer: {
            name: string,
            email: string,
            twitterUrl: string,
            instagram: string,
            phone: string
        }
}
export interface Filter {
       category: string | null,
       search: string
}