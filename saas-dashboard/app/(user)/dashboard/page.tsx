import NewProjBtn from "@/components/new-proj"
import {db} from "@/db"
import {projects} from "@/db/schema"
import { eq } from "drizzle-orm"
import {auth, currentUser} from "@clerk/nextjs/server"
import ProjectsList from "./projects-list"

export default async function Page() {
    const { userId }= await auth()
    if(!userId){
        return null
    }

    const userProjects = await db.select().from(projects).where(eq(projects.userId, userId))

    // const userId = auth()
    // const user = await currentUser()
    // console.log(user)
    // console.log(userId)

    return (
        <div>
            <div className="flex items-center justify-center gap-3">
                <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>
                <NewProjBtn/>
            </div>
            <ProjectsList projects={userProjects}/>
        </div>
    )
}