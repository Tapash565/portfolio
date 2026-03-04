export type Publication = {
    id: string;
    title: string;
    authors: { name: string; isYou?: boolean; affiliation?: string }[];
    venue: {
        name: string;
        type: "Journal" | "Conference" | "Preprint";
        issn?: string;
        volume?: string;
        issue?: string;
        month?: string;
        year?: number;
    };
    doi?: string;
    links?: {
        doi?: string;
        publisherIssue?: string;
        pdf?: string; // optional if you host a PDF in /public/papers
    };
    abstract?: string;
    keywords?: string[];
    tools?: string[];
    citation?: {
        apa?: string;
        ieee?: string;
    };
};

export const publications: Publication[] = [
    {
        id: "isjem-hmaser-cavity-2026",
        title: "Innovative Cavity Design For Hydrogen Masers Using Simulation Methods",
        authors: [
            { name: "Tapash Kumar", isYou: true, affiliation: "Delhi Technological University" },
        ],
        venue: {
            name: "International Scientific Journal of Engineering and Management (ISJEM)",
            type: "Journal",
            issn: "2583-6129",
            volume: "05",
            issue: "03",
            month: "March",
            year: 2026,
        },
        doi: "10.55041/ISJEM05556",
        links: {
            doi: "https://doi.org/10.55041/ISJEM05556",
            publisherIssue: "https://isjem.com/volume-05-issue-03-march-2026/",
            // pdf: "/papers/isjem-hmaser-cavity-2026.pdf",
        },
        abstract:
            "This paper describes the design and improvement of a microwave cavity used in an active hydrogen maser for NavIC and Deep Space Network applications. Because maser frequency stability depends on hydrogen-atom behavior inside a precisely tuned cavity, the study analyzes cavity geometry, material selection, and magnetic-field homogeneity to achieve target resonance and Q-factor. HFSS and ANSYS Maxwell are used to model candidate cavity designs, and performance is evaluated under varying operating conditions. The results inform cavity design choices for long-term frequency stability in space-grade navigation and timing systems.",
        keywords: ["Active Hydrogen Maser", "ANSYS", "HFSS", "Microwave Cavity"],
        tools: ["ANSYS HFSS", "ANSYS Maxwell"],
        citation: {
            apa:
                "Kumar, T. (2026). Innovative cavity design for hydrogen masers using simulation methods. International Scientific Journal of Engineering and Management (ISJEM), 5(3). https://doi.org/10.55041/ISJEM05556",
            ieee:
                'T. Kumar, "Innovative Cavity Design For Hydrogen Masers Using Simulation Methods," International Scientific Journal of Engineering and Management (ISJEM), vol. 5, no. 3, Mar. 2026, doi: 10.55041/ISJEM05556.',
        },
    },
];
