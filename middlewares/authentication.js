const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      return next(); // Proceed if no token is found
    }

    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload; // Attach the payload to the request object
    } catch (error) {
      console.error("Invalid token"); // Log the error for debugging
    }

    return next(); // Continue with the request
  };
}

module.exports = {
  checkForAuthenticationCookie,
};
