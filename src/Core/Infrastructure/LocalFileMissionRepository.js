import Mission from "../Domain/Mission";

class LocalFileMissionRepository
{
    data_file_path: string;
    cached_missions: string;

    constructor(data_path)
    {
        this.data_file_path = data_path;
        this.cached_missions = [];
    }

    async getAllMissions()
    {
        let missions = []
        // const data = require('./../../Data/missions.json');
        let data;
        if (this.data_file_path) {
            data = require(this.data_file_path)
        } else {
            data = require('./../../Data/missions.json')
        }

        data.forEach(element => {
            const mission = new Mission(
                element['name'],
                element['main_objective'],
                element['suggested_scondary_objective'],
                element['pack'],
                element['battle_size']
            );
            missions.push(mission);
        })
        return missions;
    }
}

export default LocalFileMissionRepository;