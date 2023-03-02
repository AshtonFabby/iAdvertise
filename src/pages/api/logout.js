import cookie from "cookie";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("jwt", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      expires: new Date(0),
      sameSite: "strict",
      path: "/",
    })
  );
  res.statusCode = 200;
  res.json({ success: true });
};
