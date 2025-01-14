export interface propsLinksList {
   complete_name: string;
   short_name: string;
}

class ApiRoutesLinks {
   private server_port = process.env.NEXT_PUBLIC_SERVER_PORT
   private LinksList: propsLinksList[] = []

   add_link(path_name: string) {
      this.LinksList.push({complete_name: `http://localhost:${this.server_port}/api/${path_name}`, short_name: path_name})
   }

   get Links() {
      return this.LinksList
   }

}

const InitClass = new ApiRoutesLinks()

InitClass.add_link("hello_world")
InitClass.add_link("users")
InitClass.add_link("vehicles")

const Links = InitClass.Links

export default Links