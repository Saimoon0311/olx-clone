import {Login,Signup} from "./"
import React from "react"

export default function(Stack){
      return(
<>
               <Stack.Screen name="Login" component={Login} />
               <Stack.Screen name="Signup" component={Signup} />
               </>
      )
}