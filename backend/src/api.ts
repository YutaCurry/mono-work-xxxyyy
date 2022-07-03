import { PrismaClient } from "@prisma/client";
import * as core from "express-serve-static-core";

function api(app: core.Express, prisma: PrismaClient) {
  /**
   * @swagger
   * /hello:
   *   get:
   *     description: こんにちはと挨拶してくれます
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: name
   *         description: アナタの名前
   *         in: query
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: nameにJohnを指定した場合、挨拶を返す
   *         examples:
   *           result:
   *              message: Hello Jon!
   *              yourName: John
   */
  app.get("/hello", async (req, res) => {
    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
    res.json({
      message: `Hello ${req.query.name}!`,
      yourName: req.query.name,
    });
  });

  // TODO Git コミットした
  // TODO ちゃんと切り変えしたい docker-compose.yml
  // TODO DIを実現する
  // TODO APIをファイルに分けても動作するか確認
}

export default api;
