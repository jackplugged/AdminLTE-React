import React, { Fragment } from "react";

import Treeview from "../treeview/treeview";
import TreeviewMenu from "../treeview/treeview-menu";
import TreeviewItem from "../treeview/treeview-item";

const recursiveTreeview = treeview => {  
  if (!!treeview) { 
    console.log(treeview); 
    return (     
        treeview.map(({ text, icon, href, items }, key) => {        
          return (
            <TreeviewItem key={key} treeview href={href} text={'Filho'} icon={icon}>                 
            <TreeviewMenu>
               <TreeviewItem href={href} text={text} icon={icon}/>
            </TreeviewMenu>
          </TreeviewItem>   
        );         
        })     
    );
  }
};

/*

{/*     
                  <TreeviewItem treeview href={href} text={'Filho'} icon={icon}>                 
                    <TreeviewMenu>
                       <TreeviewItem href={href} text={text} icon={icon}/>
                    </TreeviewMenu>
                  </TreeviewItem>  
                  


{recursiveTreeview(items)}    
<Treeview key={key} text={treeview.text} icon={treeview.icon}>
    <TreeviewMenu>
      {treeview.map(({ item, items }, key) => (
        <TreeviewItem key={key} {...item} />
      ))}
    </TreeviewMenu>
</Treeview>
*/

const SidebarItem = ({ items, text, icon }) => {
  return (
    <Treeview text={text} icon={icon}>
       <TreeviewMenu>
       {items.map(({ text, icon, href, items }, key) => {        
          return (
            <Fragment key={key}>
                <TreeviewItem href={href} text={text} icon={icon}/>
                <TreeviewItem treeview text={'Filho'} icon={icon}>                 
                    <TreeviewMenu>
                       <TreeviewItem href={href} text={text} icon={icon}/>
                      
                       <TreeviewItem treeview href={href} text={'Filho'} icon={icon}>
                          <TreeviewMenu>
                            <TreeviewItem href={href} text={text} icon={icon}/>   
                          </TreeviewMenu>
                       </TreeviewItem>   
                       
                    </TreeviewMenu>
                  </TreeviewItem> 
            </Fragment>
          );         
        })}
       </TreeviewMenu>
    </Treeview>
  );
};

export default SidebarItem;
