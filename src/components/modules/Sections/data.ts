export type DataAttributes = { 
  mode: "content"|"link"; 
  title: string; 
  icon?: string|null;
  content: string; 
} 

const dataContent = "This is the business description. ".repeat(5);

export const contentData: DataAttributes[] = [{ 
  mode: "content", 
  title: "Section 1", 
  content: dataContent, 
}, { 
  mode: "content", 
  title: "Section 2",
  content: dataContent, 
}, { 
  mode: "content", 
  title: "Market", 
  content: dataContent, 
}];

export const linkData: DataAttributes[] = [{ 
  mode: "link", 
  title: "Website", 
  icon: 'world.svg',
  content: "https://www.notissia.com/", 
}, { 
  mode: "link", 
  title: "LinkedIn", 
  icon: 'linkedin.svg',
  content: "https://www.linkedin.com/c****", 
}];