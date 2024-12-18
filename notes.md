installed express, cors, dotenv, nodemon, mongoose
installed typescript and express types

installed and setup the prettier and eslint

npm i --save-dev @types/cors
npm i bcrypt
npm i @types/bcrypt
npm i ts-node-dev

The primary application was created with the following files:--<>---<---->---<
----->  src/app.ts
----->  src/server.ts
----->  src/env
----->  src/app/config/index.ts
----->>---<>---<---->--

Application building continues with the following modules:---<>--<---->--<
----->  src/app/modules/product
----->  src/app/modules/order
---->>--<
---->>--/product/--<
--->----<product.interface.ts>----
--->----<product.controller.ts>----
--->----<product.service.ts>----
--->----<product.model.ts>----
--->----<product.validation.ts>----
--->----<product.route.ts>----
--->----<^.^>----
---->>--/order/--<
--->----<order.interface.ts>----
--->----<order.controller.ts>----
--->----<order.service.ts>----
--->----<order.model.ts>----
--->----<order.validation.ts>----
--->----<order.route.ts>----
--->----<^.^>----
---->>>--<---->---

installing zod validation <---->  

vercel --prod