import clientFavicon from "public/images/logo/client.ico";
import adminFavicon from "public/images/logo/admin.ico";
import clientLogo from "public/images/logo/logo.svg";
import { Metadata } from "next";

export const clientMetadata: Metadata = {
  title: "COMFUNNY",
  description: `스마트한 쇼핑-\n쇼핑은 COM FUNNY에서`,
  icons: clientFavicon.src,
};

export const adminMetadata: Metadata = {
  title: "BACK OFFICE",
  description: "BACKOFFICE DESCRIPTION",
  icons: adminFavicon.src,
};

export const clientSiteConfig = {
  title: "COMFUNNY",
  description: `스마트한 쇼핑-\n쇼핑은 COM FUNNY에서`,
  contactNumber: "010-6333-3996",
  logo: clientLogo,
};

export const adminSiteConfig = {
  title: "BACK OFFICE",
  description: "BACKOFFICE DESCRIPTION",
  contactNumber: "010-6333-3996",
};
