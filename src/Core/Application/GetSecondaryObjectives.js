import LocalFileObjectiveRepository from "../Infrastructure/LocalFileObjectiveRepository";

class GetSecondaryObjectives
{
    static async execute() {
        const repo = new LocalFileObjectiveRepository()
        return repo.getByType('secondary').filter((item) => {
            if (item.category() !== "main") {
                return true;
            }
            return false;
        });
    }
}

export default GetSecondaryObjectives;