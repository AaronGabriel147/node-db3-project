
const db = require('../../data/db-config');


function getSchemes() {
  return db('schemes')
}


// How do you eat an elephant?


// EXERCISE A
/*
  1A- Study the SQL query below running it in SQLite Studio against `data/schemes.db3`.

-- What happens if we change from a LEFT join to an INNER join?
-- With left join we add the scheme_name "Have fun!" with the nuber_of_steps equaling 0

2A- When you have a grasp on the query go ahead and build it in Knex.
Return from this function the resulting dataset.


SELECT
    sc.*,                                -- takes all from schemes
    count(st.step_id) as number_of_steps -- counts steps_id and renames it
FROM schemes as sc                       -- renames schemes
LEFT JOIN steps as st                    -- renames steps & LEFT JOIN
    ON sc.scheme_id = st.scheme_id       -- joins scheme_id on both tables
    GROUP BY sc.scheme_id                -- Not sure, need to look up GROUP BY
ORDER BY sc.scheme_id ASC;               -- order in ascending order

*/


// Pseudo-code:
// [x] 1. Grab all data from the scheme table
// 2. Grab all st.step_id from the steps table, rename it to number_of_steps
// 3. Count number_of_steps --> From docs: knex('users').groupBy('count')
// [x] 4. Join the two tables on the scheme_id
// [x] 5. Sort the sc.scheme_id in ascending order


function find() {
  return db('schemes as sc')                                         // grab all schemes and renames
    // console.log('sc ------>', sc)
    .leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')  // joins scheme_id on both tables
    .groupBy('sc.scheme_id')
    .orderBy('sc.scheme_id', 'ASC')
    .then(schemes => {
      return schemes;
    })
    .catch(err => {
      console.log(err);
    });
}










/*
1B- Study the SQL query below running it in SQLite Studio against `data/schemes.db3`:

SELECT
          sc.scheme_name,                 -- take schema_name
          st.*                            -- take all from steps
      FROM schemes as sc                  -- renames schemes
      LEFT JOIN steps as st               -- renames steps & LEFT JOIN
          ON sc.scheme_id = st.scheme_id  -- merges the two scheme_id's. I think.
          WHERE sc.scheme_id = 1              -- filter scheme_id # 1
      ORDER BY st.step_number ASC;        -- order step_number in ascending order. 1, 2, 3.
      

      
      
      
      2B- When you have a grasp on the query go ahead and build it in Knex
      making it parametric: instead of a literal `1` you should use `scheme_id`.         //  WHAT!?..... Para?
      
      3B- Test in HTTP Client and see that the resulting data does not look like a scheme,
      but more like an array of steps each including scheme information:
      
      [
        {
          "scheme_id": 1,
          "scheme_name": "World Domination",
          "step_id": 2,
          "step_number": 1,
          "instructions": "solve prime number theory"
        },
        {
          "scheme_id": 1,
          "scheme_name": "World Domination",
          "step_id": 1,
          "step_number": 2,
          "instructions": "crack cyber security"
        },
        // etc
      ]
      
      4B- Using the array obtained and vanilla JavaScript, create an object with
      the structure below, for the case _when steps exist_ for a given `scheme_id`:      // Slightly confused.
      
      {
        "scheme_id": 1,
        "scheme_name": "World Domination",
        "steps": [
          {
            "step_id": 2,
            "step_number": 1,
            "instructions": "solve prime number theory"
          },
          {
            "step_id": 1,
            "step_number": 2,
            "instructions": "crack cyber security"
          },
          // etc
        ]
      }
      
    5B- This is what the result should look like _if there are no steps_ for a `scheme_id`:
    
    {
      "scheme_id": 7,
      "scheme_name": "Have Fun!",
      "steps": []
    }
    */

function findById(scheme_id) { // EXERCISE B
}



function findSteps(scheme_id) { // EXERCISE C
  /*
  1C- Build a query in Knex that returns the following data.
  The steps should be sorted by step_number, and the array
  should be empty if there are no steps for the scheme:

    [
      {
        "step_id": 5,
        "step_number": 1,
        "instructions": "collect all the sheep in Scotland",
        "scheme_name": "Get Rich Quick"
      },
      {
        "step_id": 4,
        "step_number": 2,
        "instructions": "profit",
        "scheme_name": "Get Rich Quick"
      }
    ]
*/
}

function add(scheme) { // EXERCISE D
  /*
    1D- This function creates a new scheme and resolves to _the newly created scheme_.
  */
}

function addStep(scheme_id, step) { // EXERCISE E
  /*
    1E- This function adds a step to the scheme with the given `scheme_id`
    and resolves to _all the steps_ belonging to the given `scheme_id`,
    including the newly created one.
  */
}

module.exports = {
  getSchemes,
  find,
  findById,
  findSteps,
  add,
  addStep,
}
