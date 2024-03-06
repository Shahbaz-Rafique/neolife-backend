const { connection } = require('../../utils/connection');

async function AddPage(req, response) {
  const details = JSON.parse(req.query.data);
  const id = req.query.id;
  const email = req.query.email;
  const page = req.query.page;

  connection.query(
    `SELECT * FROM Data WHERE consultantId='${id}' AND email='${email}'`,
    (err, res) => {
      if (err) throw err;
      else {
        if (res.length === 0) {
          const data = {
            consultantId: id,
            email: email,
            [page]: JSON.stringify(details),
          };
          connection.query('INSERT INTO Data SET ?', data, (err, resl) => {
            if (err) throw err;
            else {
              return response.status(200).json({ message: 'added' });
            }
          });
        } else {
          connection.query(
            `UPDATE Data SET ${page}=? WHERE consultantId=? AND email=?`,[JSON.stringify(details),id,email],
            (err, res) => {
              if (err) {
                console.log(err);
              } else {
                return response.status(200).json({ message: 'added' });
              }
            }
          );
        }
      }
    }
  );
}

module.exports = {
  AddPage,
};
