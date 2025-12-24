'use server'
import { db } from "@/db"
import {auth, currentUser} from "@clerk/nextjs/server"
import { desc } from "drizzle-orm"
import { url } from "inspector"
import { projects } from "@/db/schema"
import { stringify } from "querystring"
import {redirect} from 'next/navigation' 

export async function createProject(formData: FormData ) {
    const authResult = await auth();
    const userId = authResult?.userId;

    const project = {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        url: formData.get("url") as string,
        userId,
    }
    // console.log(`Creating New project with data: ${JSON.stringify(project)}`)
    // console.log(`Current user: ${JSON.stringify(userId)}`)

    const [newProject] = await db.insert(projects).values(project).returning({ insertedId: projects.id })
    // console.log(`New project created with ID: ${newProject}`)
    // return newProjectId
    redirect(`/projects/${newProject.insertedId}/instructions`);
}
