export default function Footer({CLINIC})
{
    return(
        <footer>© {new Date().getFullYear()} {CLINIC.name}. Имеются противопоказания, необходима консультация специалиста.</footer>
    )
};