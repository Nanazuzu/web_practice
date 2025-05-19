import crypto from "crypto";

export const formatDate = (raw: Date | undefined) => {
  if (!raw) return "";
  const d = new Date(raw);
  return `${d.getFullYear().toString().slice(2)}
  .${(d.getMonth() + 1).toString().padStart(2, "0")}
  .${d.getDate().toString().padStart(2, "0")}`;
};

export const generatePasswordHash = (pw: string) => {
  const pwSalt = process.env.PW_SALT;
  if (!pwSalt) {
    throw Error("Environment error");
  }
  const hashedPassword = crypto
    .createHmac("sha3-512", pwSalt)
    .update(pw)
    .digest("hex");
  return hashedPassword;
};
