import { Loc } from "./Loc";

export class AJobDto {
    public JobDescription: string;

    public SkillTypeId: number;
    public JobinitialBudget: number;
    //public Image : string;
    public ImageUrl: string;
    public Location: Loc;


    constructor(job, id, bud, url, loc) {
        this.JobDescription = job;

        this.SkillTypeId = id
        this.JobinitialBudget = bud
        // this.  Image : string;
        this.ImageUrl = url
        this.Location = loc
    }
}