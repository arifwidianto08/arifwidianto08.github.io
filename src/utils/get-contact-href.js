// @flow strict
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'twitter':
      href = 'https://www.twitter.com/arifwid49414012';
      break;
    case 'github':
      href = 'https://github.com/arifwidianto08';
      break;
    case 'telegram':
      href = 'https://t.me/arifwidianto008';
      break;
    case 'email':
      href = 'mailto:arifjozz123@gmail.com';
      break;
    case 'linkedin':
      href = 'https://www.linkedin.com/in/arif-widianto-691204169';
      break;
    case 'instagram':
      href = 'https://www.instagram.com/arif.widianto143/';
      break;
    case 'facebook':
      href = 'https://www.facebook.com/arifwidiatno112';
      break;
    case 'gitlab':
      href = 'https://www.gitlab.com/arifjozz';
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
