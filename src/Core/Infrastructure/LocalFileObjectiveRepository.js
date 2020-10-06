import ObjectiveBuilder from "../Domain/ObjectiveBuilder";

class LocalFileObjectiveRepository
{
    constructor(data_file_path)
    {
        this._data_file_path = data_file_path;
    }

    getAll() {
        let objectives = [];
        let data;
        if (this._data_file_path) {
            data = require(this._data_file_path);
        } else {
            data = require('./../../Data/objectives.json');
        }

        data.forEach( el => {
            objectives.push(ObjectiveBuilder.fromJson(el));
        });
        return objectives;
    }

    findByKey(key)
    {
        let data;
        if (this._data_file_path) {
            data = require(this._data_file_path);
        } else {
            data = require('./../../Data/objectives.json');
        }
        const objective = data.find( element => element['key'] === key);
        if (objective) {
            return ObjectiveBuilder.fromJson(objective);
        }
        throw new Error("Objective not found: "+ key);
    }

    getByType(type)
    {
        let objectives = []
        let data;
        if (this._data_file_path) {
            data = require(this._data_file_path);
        } else {
            data = require('./../../Data/objectives.json');
        }

        data.forEach( el => {
            if (el['type'] === type) {
                objectives.push(ObjectiveBuilder.fromJson(el))
            }
        })

        return objectives
    }
}

export default LocalFileObjectiveRepository;

