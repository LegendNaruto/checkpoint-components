function FullName(){
    const linkedinProfile = "https://www.linkedin.com/in/mr-jassem-ackerman-002734224/";
    return (
        <h1 >Jassem Ackerman
            <a href={linkedinProfile} target="_blank"> <i style={{color:"blue"}} class="bi bi-linkedin"></i> </a>
        </h1>
    );
}

export default FullName;