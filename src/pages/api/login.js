import cookie from "cookie";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("jwt", req.body.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "strict",
      path: "/",
    })
  );
  res.statusCode = 200;
  res.json({ success: true });
};
