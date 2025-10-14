import { Outlet, redirect } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { MobileSidebar, NavItems } from "~/components";
import { account } from "~/appwrite/client";
import { getExistingUser, storeUserData } from "~/appwrite/auth";

export async function clientLoader() {
   try {
      const user = await account.get();
      if (!user.$id) return redirect("/sign-in");

      let existingUser = null;

      try {
         existingUser = await getExistingUser(user.$id);
      } catch (e) {
         console.log(e);
         return redirect("/sign-in");
      }

      if (!existingUser?.$id) {
         existingUser = await storeUserData();
      }

      if (existingUser?.$id) {
         return redirect("/");
      }

      return existingUser;
   } catch (e) {
      console.log(e);
      return redirect("/sign-in");
   }
}

const AdminLayout = () => {
   return (
      <div className="admin-layout relative">
         <MobileSidebar />
         <aside className="h-full w-full max-w-[270px] hidden lg:block">
            <SidebarComponent width={270} enableGestures={false}>
               {/* This nav items is his component, so it can utilize usedataloder */}
               <NavItems />
            </SidebarComponent>
         </aside>
         <aside className="children">
            <Outlet />
         </aside>
      </div>
   );
};

export default AdminLayout;
