import { describe, expect, it }  from  "vitest";
 import { render, screen }  from  "@testing-library/react";
import Home from "../pages/index"

 

 describe( "Home",  () => {
   it( "it should be rendered",  () => {
     render( < Home />);
     expect(screen. getByText( "Hello")). toBeInTheDocument();
  });
});
