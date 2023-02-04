import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {isVisible ? ( <button 
                onClick={() => setIsVisible(true)}
                className="cursor-pointer underline"
            >
                Hide
            </button>
            ) : (
            <button 
                onClick={() => setIsVisible(false)}
                className="cursor-pointer underline"
            >
                Show
            </button>
            )}
           
            {isVisible && <p>{description}</p>}
        </div>
    );
};

const Instamart = () => {
    const [visibleSection,setVisibleSection] = useState("");
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section 
                title={"About Instamart"}
                description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."}
                isVisible = {visibleSection == "about"}
                setIsVisible = {() => setVisibleSection("about")}
            />
            <Section 
                title={"Team Instamart"}
                description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."}
                isVisible = {visibleSection == "team"}
                setIsVisible = {() => setVisibleSection("team")}
            />
            <Section 
                title={"Carrers Instamart"}
                description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."}
                isVisible = {visibleSection == "carrer"}
                setIsVisible = {() => setVisibleSection("carrer")}
            />
        </div>
    )
};

export default Instamart;