import { Model } from 'sequelize-typescript';
import { addresses } from "../addresses/addresses.model";
import { skills } from "../skills/skills.model";
import { languages } from "../languages/languages.model";
import { bios } from "../bios/bios.model";
import { educations } from "../educations/educations.model";
export declare class users extends Model {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    image: string;
    get socials(): string;
    set socials(value: string);
    forgot_password_code: string;
    verified_at: string;
    addresses: addresses[];
    skills: skills[];
    languages: languages[];
    bios: bios[];
    certificates: bios[];
    educations: educations[];
}
