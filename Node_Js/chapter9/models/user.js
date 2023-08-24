const Sequelize = require('sequelize');


class User extends Sequelize.Model {
  // 테이블 정보
  static initiate(sequelize) {
    User.init({
      email: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      nick: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      provider: {
        type: Sequelize.ENUM('local', 'kakao'),
        allowNull: false,
        defaultValue: 'local',
      },
      snsId: {
        type: Sequelize.STRING(30),
        allowNull: true,
      }
    }, {
      sequelize,
      timestamps: true, // createdAt, updatedAt
      underscored: false, //created_at, updated_at
      modelName: 'User',
      tableName: 'users',
      paranoid: true, // deletedAt // soft delete
      charset: 'utf8mb4', // 이모티콘도 저장하고 싶다면
      collate: 'utf8mb4_general_ci',
    })
  }

  // 테이블 관계
  static associate(db) {
    db.User.hasMany(db.Post); //user, getPosts, user.addPosts 관계 메서드 생성됨
    db.User.belongsToMany(db.User, {
      foreignKey: 'followingId',
      as: 'Followers',
      through: 'Follow',
    })
    db.User.belongsToMany(db.User, {
      foreignKey: 'followerId',
      as: 'Followings',
      through: 'Follow',
    })
  }
}

module.exports = User;